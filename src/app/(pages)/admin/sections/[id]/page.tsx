import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { EditSectionForm } from "../../components/elements";
import fetchById from "@/util/fetchById";

let updatesectionData = {};
{/* @ts-ignore */}
const EditSectionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    {/* @ts-ignore */}
    updatesectionData = await fetchById(params.id, SECTIONS_API_URL);
   {/* @ts-ignore */}
    updatesectionData = updatesectionData.document;
  } else {
    updatesectionData = {
      _id: "new",
    };
  }
  return <EditSectionForm data={updatesectionData} />;
};

export default EditSectionPage;
