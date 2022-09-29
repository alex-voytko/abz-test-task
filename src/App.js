import { useEffect, useState, createContext, useCallback } from "react";

import { getUsers } from "./api";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import UserSection from "./sections/UserSection";
import FormSection from "./sections/FormSection";

export const appContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [maxPage, setMaxPage] = useState(1);

  const fetchUsers = (page, isMain = true) => {
    setIsLoading(true);
    getUsers(page)
      .then((res) => {
        isMain ? setUsers([...users, ...res.users]) : setUsers(res.users);
        setMaxPage(res.total_pages);
        setCurPage(res.page);
      })
      .catch((error) => error.message)
      .finally(() => setIsLoading(false));
  };

  useEffect(
    useCallback(() => {
      fetchUsers(curPage);
    }, []),
    []
  );

  return (
    <appContext.Provider value={{ users, fetchUsers, setIsRegistered }}>
      <Header isRegistered={isRegistered} />
      <HeroSection isRegistered={isRegistered} />
      <UserSection curPage={curPage} maxPage={maxPage} isLoading={isLoading} />
      <FormSection isRegistered={isRegistered} />
    </appContext.Provider>
  );
}

export default App;
