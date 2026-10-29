
function CourseCard(props) {
  return (
    <div className="w-72 rounded-lg bg-white p-4 shadow-md">
      <img
        src={props.image}
        alt={props.name}
        className="h-40 w-full rounded-md object-cover"
      />

      <h2 className="mt-3 text-xl font-bold">
        {props.name}
      </h2>

      <p className="text-gray-500">
        {props.category}
      </p>

      <p className="mt-2 font-semibold text-blue-600">
        Rs. {props.price}
      </p>

      <p>⭐ {props.rating}</p>

      <p className="mt-2 text-sm text-gray-600">
        {props.description}
      </p>

      <p className="mt-3 text-sm">
        Teacher: {props.teacherName}
      </p>
    </div>
  );
}

export default CourseCard;
