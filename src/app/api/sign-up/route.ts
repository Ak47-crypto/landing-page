import UserModel from "@/model/user";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcrypt'
export async function POST(req: Request) {
    try {
        dbConnect();
            const {email,password}=await req.json();
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await UserModel.findOne({email})
            console.log(user)
            if(!user){
                const user2=await UserModel.create({
                    email:email,
                    password:hashedPassword
                })
                
                if(!user2){
                    return Response.json({
                        success:false,
                        message:"Db error occured please try again"
                    },{status:400})
                }
                return Response.json({
                    success:true,
                    message:"User created Successfully"
                },{status:201})
            }
            else
            return Response.json({
                success:false,
                message:"User already exists"
            },{status:400})
           
            
           
    } catch (error) {
        return Response.json({
            success:false,
            message:"Internal server serror"
        },{status:500})
    }
}