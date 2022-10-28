import { useCallback, useEffect, useState } from "react";
import {
  createComponent,
  deleteComponent,
  getComponentsList,
  updateComponent,
} from "../services/componentService";
import { useBooleanFlag } from "./common";

function useRequests(page) {
    const [components, setComponents] = useState([]);

    const [isLoading, toggleIsLoading] = useBooleanFlag(false);

    const refresh = useCallback(() => {
        toggleIsLoading(true);
        getComponentsList(page).then((data) => {
            setComponents(data);
            toggleIsLoading(false);
        });
    }, [toggleIsLoading, page]);

    const save = useCallback(
        (data) => {
            toggleIsLoading(true);
            if (data.id) {
                updateComponent(page, data).then((data) => {
                    setComponents((components) => components.map((el) => (el.id === data.id ? data : el)));
                    toggleIsLoading(false);
                });
            } else {
                createComponent(page, data).then((data) => {
                    setComponents((components) => [...components, data]);
                    toggleIsLoading(false);
                });
            }
        },
        [toggleIsLoading, page]
    );

    const remove = useCallback(
        (id) => {
        toggleIsLoading(true);
        deleteComponent(page, id).then(() => {
            setComponents((components) => components.filter((el) => el.id !== id));
            toggleIsLoading(false);
        });
        },
        [toggleIsLoading, page]
    );

    useEffect(refresh, [refresh]);

    return {
        components,
        isLoading,
        refresh,
        save,
        remove,
    };
}

export default useRequests;