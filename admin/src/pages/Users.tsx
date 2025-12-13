import { PageTitle } from "@/components/common";
import { UsersList } from "@/components/users";

const Users = () => {
  return (
    <div className="">
      <PageTitle title="users" />

      <UsersList />
    </div>
  );
};

export default Users;
