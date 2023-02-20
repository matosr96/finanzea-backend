import { Collection } from "../../constants-definitions/function/constants";
import { getModel } from "../../constants-definitions/function/mongoose";
import { PartialUser, User, UserSchemaMongo } from "../../types/models/user";
import bcrypt from 'bcrypt';
import {v4 as UUID} from 'uuid';
import jwt from 'jsonwebtoken';

export const signup = async (data: PartialUser): Promise<User | Error> => {
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await getModel(Collection.USERS, UserSchemaMongo);
    const uuid = UUID();
    const password = await bcrypt.hashSync(data.password || "", 10);
    const user = await new model({ ...data, password, uuid});
    if (!user) return new Error('101');
    const token = await jwt.sign({uuid: user.uuid}, JWT_SECRET_KEY, {expiresIn: '12h'} )
    await user.save();
    return {token, ...user._doc};
};
