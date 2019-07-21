export class AuthService {
  loggedIn = false;

  isAuthenticated(){
    const promisse = new Promisse(
      (resolve, reject) =>{
        setTimeout(() => {
          resolve(this.loggedIn)
        },800);
        return promisse;
      }
    )
  }

  login(){
    this.loggedIn = true;
  }
  
  logot(){
    this.loggedIn = false;
  }
}