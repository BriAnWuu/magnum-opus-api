let connectedUsers = [];

const addUser = (userId, socketId) => {
    !connectedUsers.some((user) => user.userId === userId) &&
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

const socketOnConnect = (io) => {
    io.on("connection", (socket) => {
        
        socket.on("addNewUser", (userId) => {
            addUser(userId, socket.id);
            console.log(connectedUsers);
        });


        setTimeout(() => {
            io.emit('test_broadcast', { message: "testing" });
            console.log('test message is sent to', socket.id)
        }, 5000);

        socket.on("disconnect", () => {
            removeUser(socket.id);
            console.log(connectedUsers);
        });
    });
}



export default socketOnConnect;