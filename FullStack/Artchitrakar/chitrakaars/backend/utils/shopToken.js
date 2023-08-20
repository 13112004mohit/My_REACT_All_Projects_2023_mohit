// Create shoptoken of seller and save in cookie

const shopToken = (seller,statusCode,res)=>{
        const token = seller.getJWTToken();
 
        // options for cookie
        const options = {
                expires: new Date(
                        Date.now() + process.env.COOKIE_EXPIRE *24*60*60*1000
                ),
                httpOnly:true,
        }

        res.status(statusCode).cookie('seller_token',token,options).json({
                success:true,
                seller,
                token,
        })

}

module.exports = shopToken;