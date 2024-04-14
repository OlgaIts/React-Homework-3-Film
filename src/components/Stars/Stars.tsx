import {Star} from "../Star";

interface StarsProps {
  count?: number;
}
export const Stars = ({count = 0}: StarsProps) => {
  if (!count || count > 5 || count < 0) {
    return null;
  }

  return (
    <ul className='card-body-stars u-clearfix'>
      {[...Array(count)].map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};
