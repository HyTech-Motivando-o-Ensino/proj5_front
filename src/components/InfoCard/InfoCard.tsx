import './InfoCard.css'

interface InfoCardProps {
    title: string;
    value: string | number | undefined;
}
const InfoCard = (props: InfoCardProps) => {

    return (
        <div className="info-card">
            <p className="info-card-value">{props.value}</p>
            <p className="info-card-title">{props.title}</p>
        </div>
    )
}
export default InfoCard;