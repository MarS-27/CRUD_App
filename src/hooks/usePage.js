import { useState } from "react";
import useRequests from "./useRequests";


function usePage(page, emptyPage) {
  const { components, remove, save, isLoading } = useRequests(page);

  const [selectedComponent, setSelectedComponent] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const isFormVisible = !!selectedComponent && !openEdit;

  const onEditOpen = () => {
    setOpenEdit(true);
  };

  const onEditClose = () => {
    setOpenEdit(false);
    closeForm();
  };

  const onAddNewBtnClick = () => {
    setSelectedComponent(emptyPage());
  };

  const closeForm = () => {
    setSelectedComponent(null);
  };

  const onComponentSelect = (component) => {
    setSelectedComponent(component);
  };

  const onSave = (component) => {
    save(component);
    closeForm();
  };

  const onComponentDelete = (component) => {
    remove(component.id);
  };

  return {
    components,
    selectedComponent,
    openEdit,
    isFormVisible,
    isLoading,
    onEditOpen,
    onEditClose, 
    onAddNewBtnClick,
    closeForm,
    onComponentSelect,
    onSave,
    onComponentDelete,
  };
}

export default usePage;