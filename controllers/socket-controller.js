import initKnex from "knex";
import configuration from "../knexfile.js";


let connectedUsers = [];

const addUser = (userId, socketId) => {
    !connectedUsers.some((user) => user.socketId === socketId) &&
        connectedUsers.push({ userId, socketId });
}

const removeUser = (socketId) => {
    connectedUsers = connectedUsers.filter((user) => 
        user.socketId !== socketId
    );
}

const getUser = (userId) => {
    return connectedUsers.find((user) => user.userId === userId);
}

const getWatcherList = async (auctionId) => {
    const knex = initKnex(configuration);
    try {
        const auction = await knex("auction")
            .select("id", "watchers")
            .where({ id: auctionId })
            .first();

        auction.watchers = JSON.parse(auction.watchers);

        return auction

    } catch (error) {
        console.error('Database query failed:', error);
        throw error;
    }
}

const newBidBroadcast = async (io, socket, auctionId) => {
    try {
        const auction = await getWatcherList(auctionId);

        // match watchers and connected sockets
        auction.watchers.forEach((watcherId) => {
            connectedUsers.filter(user =>
                user.userId === watcherId
            ).forEach((user => {
                socket.to(user.socketId).emit("newBidBroadcast", {
                    success: true, 
                    auction
                });
            }));
        });

    } catch (error) {
        console.error(error);
        io.emit("newBidBroadcast", { 
            success: false, 
            error: "Failed to get watchers" 
        });
    }
}

const socketOnConnect = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected ${socket.id}`)
        
        socket.on("addNewUser", (userId) => {
            addUser(userId, socket.id);
            console.log(connectedUsers);
        });

        socket.on("onNewBid", (auctionId) => {
            // console.log("new bid!!")
            newBidBroadcast(io, socket, auctionId)
        });

        socket.on("disconnect", () => {
            removeUser(socket.id);
            console.log(connectedUsers);
        });
    });
}



export default socketOnConnect;