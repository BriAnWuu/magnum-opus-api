import { GetAuctionSocket } from "../repo/auction-db.js";

let connectedUsers = [];

const addUser = (userId, socketId) => {
    !connectedUsers.some((user) => user.socketId === socketId) &&
        connectedUsers.push({ userId, socketId });
};

const removeUser = (socketId) => {
    connectedUsers = connectedUsers.filter(
        (user) => user.socketId !== socketId
    );
};

const findUser = (socketId) => {
    return connectedUsers.find((user) => user.socketId === socketId).userId;
};

const getAuction = async (auctionId) => {
    try {
        const auction = await GetAuctionSocket(auctionId);

        auction.watchers = JSON.parse(auction.watchers);
        auction.leading_bid_price = JSON.parse(auction.leading_bid_price);

        return auction;
    } catch (error) {
        console.error("Database query failed:", error);
        throw error;
    }
};

const newBidBroadcast = async (socket, auctionId) => {
    try {
        const auction = await getAuction(auctionId);

        // match watchers and connected sockets
        // one user can have multiple session (or devices) online
        auction.watchers.forEach((watcherId) => {
            connectedUsers
                .filter((user) => user.userId === watcherId)
                .forEach((user) => {
                    socket.to(user.socketId).emit("newBidBroadcast", {
                        success: true,
                        auction,
                    });
                });
        });
    } catch (error) {
        console.error(error);
        socket.emit("newBidBroadcast", {
            success: false,
            error,
        });
    }
};

// main socket controller
const socketOnConnect = (io) => {
    io.on("connection", (socket) => {
        socket.on("addNewUser", (userId) => {
            addUser(userId, socket.id);
            console.log(connectedUsers);
        });

        socket.on("onNewBid", (auctionId) => {
            newBidBroadcast(socket, auctionId);
        });

        socket.on("disconnect", () => {
            console.log(`User ${findUser(socket.id)} has disconnected`);
            removeUser(socket.id);
            console.log(connectedUsers);
        });
    });
};

export default socketOnConnect;
