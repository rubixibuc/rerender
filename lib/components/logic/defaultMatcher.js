import { shallow } from "../../Matchers";

const defaultMatcher = (expression, value) => shallow(value, expression);

export default defaultMatcher;
