enum Roles {
    ADMIN, USER, GUEST
  }
  
  interface IUser {
    username: string,
    role: Roles
  }
  
  const userWithRole: IUser = {
    username: 'alexageev',
    role: Roles.ADMIN
  }
  
  console.log(userWithRole);
  
  
  enum Membership {
    Simple, // #0
    Standart, // #1
    Premium // #2
  }
  
  const  membership = Membership.Standart;
  console.log(membership); // return #1
  
  enum SocialMedia {
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram"
  }
  
  const social = SocialMedia.INSTAGRAM;
  
  console.log(social);
  
  enum UserRoles {
    USER = "Utilizador",
    ADMIN = "Administrador"
  }
  
  for (const role in UserRoles) {
    console.log(role)
  }
  
  

  
  
  
  
  
  
  