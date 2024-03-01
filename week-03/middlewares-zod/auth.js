function middleware(){
    return function (req, res, next){

    };
};

app.use(express.json());

app.get("/", function(req, res){
    throw new Error("Error");
});

app.use(function(err, req, res, next){

});
