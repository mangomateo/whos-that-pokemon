import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";

const ExtraInfo = (props) => {
    return (
        <section id="extra-info" className="center-me">
            <PrimaryInfo 
                baseExp={props.baseExp}
                type={props.type}
            />
            <SecondaryInfo 
                ability={props.ability}
                height={props.height}
                weight={props.weight}
            />
        </section>
    );
}

export default ExtraInfo;