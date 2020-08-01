export class ExpressServer {
    startServer(app: any) {
        // searching for port and assigning 3000 if not found
        const port = process.env.port || 3001;
        // Starting and listening to server
        app.listen(port, () => {
            console.log('listening on port: ', port);
        });
    }
}
