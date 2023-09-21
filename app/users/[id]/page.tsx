interface Props {
  params: {
    id: number;
  };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <>
      <h1>UserDetailPage of {id}</h1>
    </>
  );
};
export default UserDetailPage;
