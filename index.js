import app from './src/app.js'

async function main(){
    let PORT = process.env.PORT || 4300;
    app.listen(PORT,()=>{
        console.log(`Server Running on http://localhost:${PORT}`)
    });

    
}

main()