import api from "../api/api";
import { URIs } from "../constants/index";

export function getComponentsList(page) {
    const componentUri = URIs.filter(comp => comp === page)
    return api.get(componentUri[0]).then((resp) => resp.data);  
}

export function getComponent(page, id) {
    const componentUri = URIs.filter(comp => comp === page)
    return api.get(componentUri[0] + "/" + id).then((resp) => resp.data);
}

export function createComponent(page, component) {
    const componentUri = URIs.filter(comp => comp === page)
    return api.post(componentUri[0], component).then((resp) => resp.data);
}

export function updateComponent(page, component) {
    const componentUri = URIs.filter(comp => comp === page)
    return api.put(componentUri[0] + "/" + component.id, component).then((resp) => resp.data);
}

export function deleteComponent(page, id) {
    const componentUri = URIs.filter(comp => comp === page)
    return api.delete(componentUri[0] + "/" + id).then((resp) => resp.data);
}
