import { ArrayUtils } from './functional_programming/array-util.js';
import { compose } from './functional_programming/compose.js';
import { partial } from './functional_programming/partial.js';
import { pipe } from './functional_programming/pipe.js';

(async () => {
  const filterOutStanding = ({ rating }) => rating >= 4.9;
  const filterGood = ({ rating }) => rating >= 4.5;
  const filterFine = ({ rating }) => rating >= 4.0;
  const filterBad = ({ rating }) => rating < 4.0;

  const projectIdAndBrand = ({ id, brand }) => ({ id, brand });
  const projectTitleAndRating = ({ title, rating }) => ({ title, rating });

  const projectBrand = ({ brand }) => ({ brand });

  const fetched = await fetch('https://dummyjson.com/products');
  const { products } = await fetched.json();

  // 4.5이상의 제품의 id와 브랜드 명
  const getIdAndBrandForGood = pipe(
    partial(ArrayUtils.filter, undefined, filterGood),
    identifier('filtered'), //
    partial(ArrayUtils.map, undefined, projectIdAndBrand), //
    identifier('mapped'), //
  );

  const getTitleAndRatingForFine = compose(
    partial(ArrayUtils.map, undefined, projectTitleAndRating), //
    partial(ArrayUtils.filter, undefined, filterFine),
  );

  console.log(getIdAndBrandForGood(products));
  console.log(getTitleAndRatingForFine(products));
})();
