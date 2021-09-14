import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";

const ExtraInfo = (props) => {
    return (
        <section id="extra-info" className="d-flex justify-content-evenly">
            <PrimaryInfo 
                baseExp={props.baseExp}
                height={props.height}
                weight={props.weight}
            />
            <SecondaryInfo 
                ability={props.ability}
                type={props.type}
            />
        </section>
    );
}

export default ExtraInfo;