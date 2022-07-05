import { User } from "../../models/User.model";

export const register = await User.create({
  first_name: "user",
});
// let's assume the default of isAdmin is false
console.log(register.first_name); // 'user'
