import { notFound } from "next/navigation";

interface Props {
  params: {
    id: number;
  };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound(); // for custom not found. we have added this.
  return (
    <>
      <h1>UserDetailPage of {id}</h1>
    </>
  );
};
export default UserDetailPage;
