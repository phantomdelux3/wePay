import { Hono } from "hono";
import {getPrisma} from '../Database/Database_connection'
import Signup from "../Controller/Signup";
import Signin from "../Controller/Signin";
import Logout from "../Controller/Logout";
import Search_User from "../Controller/Search_User";
import User from "../Controller/User";
const Route = new Hono();

const db_uri = 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWY3NTNmNWEtMzhjMC00MmJlLWFiMDUtNTNkODg5MzVmNGIxIiwidGVuYW50X2lkIjoiMTU0N2I0YjlhMzNjNjNhNTRjNGFjNDk4ODhjMmFhMjEyZDkyNWE4YzcyOWViMzdiOTY3OTViYzY4YWI5NjJiOCIsImludGVybmFsX3NlY3JldCI6IjA2ZTdkMDNmLWRmZTctNDBiYi1iNzkyLTRhY2FkYjA5MDk2NCJ9.3c3tFYT_co98p0IPceNGfPUl1JBg3DyPmzd0N8YbAiY';

Route.route('/signup', Signup);
Route.route('/login', Signin);
Route.route('/logout', Logout);
Route.route('/search', Search_User);
Route.route('/user', User);

Route.delete('/', async (c) => {          //delete route to delete all the useres for testing porpose only
    console.log("Delete request received"); // Add this line
    const prisma = getPrisma(db_uri);
    try {
      await prisma.user.deleteMany({});
      return c.json({ message: 'All users deleted.' }); // Send a response back
    } catch (error) {
      console.error('Error deleting users:', error);
      return c.json({ error: 'Failed to delete users' }, 500); // Handle error
    } finally {
      await prisma.$disconnect();
    }
  });

export default Route;