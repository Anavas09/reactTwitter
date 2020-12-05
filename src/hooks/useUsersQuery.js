import queryString from "query-string";

/**
 * Get an URL string.
 * @param {object} location Location object from the router properties.
 * @return An object with the URL params.
 */
const useUsersQuery = location => {
  //We know what query paramas we need.
  //So just grab them and give a default value.
  //search param can be empty.
  const { page = 1, search, type = "new" } = queryString.parse(
    location.search
  );

  return { page, search, type };
};

export default useUsersQuery;
