import middleware from "next-auth/middleware";

export default middleware;

export const config = {
  // * : 0 or more
  // + : 1 or more
  // ? : 0 or one
  matcher: ["/users/:id*"],
};
