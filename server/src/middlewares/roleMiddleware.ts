const roleMiddleware = (roles: string[]) => (req: any, res: any, next: any) => {
  if (roles.includes(req.user.role)) {
    next();
  } else {
    res.status(403).json({ msg: "Access Denied. Admins Only", success: false });
  }
};

export default roleMiddleware;
