import { UsersList } from "@/components";
import { PageTitle } from "@/components/common";

const Users = () => {
  return (
    <div className="">
      <PageTitle title="users" />

      <UsersList />
    </div>
  );
};

export default Users;
