const notFound=(req,res)=>{
   return res.status(404).send('Route Not Found');
}
module.exports=notFound;