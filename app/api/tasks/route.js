import db from "@/utils/db";
import { NextResponse } from "next/server";

// IMPORTANT!!!!!! READ!!!
// request: This is the incoming request sent by the client to the server.
// It contains information about what the client is asking for, such as data
// to be saved or retrieved.

// response: This is the data that the server wants to send back to the client
// in response to the request. It could be the result of a database query,
// a success message, an error message, or any other data that the client needs.

// RESPONSE IS THE "RESPONSE OF THE REQUEST"

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return Response.json({ data: tasks });
};

//The Response.json() method is used to extract JSON data from the body of a
//response. When a request is made to a server and the server responds with data
//in JSON format, the Response.json() method allows you to parse and extract
//that data in a structured format that can be easily manipulated and used in
//your JavaScript code.

export const POST = async (request) => {
  const data = await request.json();
  //request: This is the incoming request from the client, which contains data sent by
  //         the client to the server.
  //request.json(): This is a method provided by the request object that reads the data
  //sent by the client and parses it as JSON format. It's like unpacking a gift box to
  //see what's inside.
  const task = await db.task.create({
    data: {
      content: data.content,
      // thunder client POST method
    },
  });
  return NextResponse.json({ data: task });
};
//In summary, the POST function processes incoming HTTP requests to create new
//tasks. It extracts the task content from the request, inserts it into the
//database, and then sends a JSON response back to the client confirming the
//successful creation of the task.
