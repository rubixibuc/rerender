import deepEquals from "../../utils/deepEquals"

const defaultMatcher = (expression, value) => deepEquals(value, expression, { partial: true });

export default defaultMatcher;
