import {catchAsync} from "../utils/utils";

export class AuthService{
  constructor(){}
  checkUser = catchAsync(async(req:any, res:any)=>{
    let currentUser;
    if(req.cookies["token"]){
        const token = req.cookies["token"];
        console.log(token);
    }
  }) 
  logoutUser = catchAsync(async(req:any, res:any)=>{
    res.cookie('token', 'loggedOut', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly:true,
    })
    res.status(200).send('user is logged out');
  })
  
}
