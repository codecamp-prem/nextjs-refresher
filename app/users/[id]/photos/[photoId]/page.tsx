interface Props {
  params: { id: number; photoId: number };
}
const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <h1>
        PhotoPage {id} {photoId}
      </h1>
    </>
  );
};
export default PhotoPage;
