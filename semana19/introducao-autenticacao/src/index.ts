import app from "./app"
import { idGenerator } from "./services/idGenerator"

console.log(
    new idGenerator().generateId()
    )