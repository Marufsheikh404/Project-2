
import service from "../../assets/New folder/service.png"

const ServiceCard = ({ title, description,id }) => {
    return (
        <div className="card bg-base-100 w-full h-64 shadow-md hover:bg-[#CAEB66] transition-all duration-300" style={{background: id === 5 ? "#CAEB66": ""}}>
            <figure className="px-10 pt-10">
                <img src={service} alt="service" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;