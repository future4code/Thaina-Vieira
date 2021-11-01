import { authenticationData } from "../types"


import * as jwt from "jsonwebtoken";

 export class Authenticator {
    const expiresIn = "1min";
    const generateToken(input: AuthenticationData): string {
      const token = jwt.sign(
        {
          id: input.id,
        },
        process.env.JWT_KEY as string,
        {
          expiresIn
        }
      );
      return token;
    }
  }
  
  type AuthenticationData = {
    id: string;
  }
 }

