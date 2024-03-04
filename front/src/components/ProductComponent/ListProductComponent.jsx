
import { useRouter } from "next/router";

export default function ListProductComponent(props) {
  const { idParam, nombreParam } = props;


  return (
    <div className="PrincipalContainerRow">
      <div>
        <div className="listDonuts">
          <span className="idDonut">{idParam}</span>
          <span className="nombreDonut">{nombreParam}</span>
          </div>
      </div>
    </div>
  );
}
