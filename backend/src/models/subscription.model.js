import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
subscriber : {
    type : Schema.Types.ObjectId,
    ref : "User" //Who is subscribing
},
channel : {
    type :  Schema.Types.ObjectId,
    ref: "User" // to whom subscriber is subscribing
}
},{timestamps : true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)