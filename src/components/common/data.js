export const openApplyModal = () => {
    const modal = new bootstrap.Modal(document.getElementById("ApplyModal"));
    modal.show();
};

export const closeApplyModal = () => {
    const modal = document.getElementById("ApplyModal");
    if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
};

export const openJobModal = () => {
    const modal = new bootstrap.Modal(document.getElementById("jobModel"));
    modal.show();
};

export const closeJobModal = () => {
    const modal = document.getElementById("jobModel");
    if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
};

//service redirect
export const handleServices = (router, num) => {
    switch (num) {
        case 1:
            router.push("/services/digital_transformation");
            break;
        case 2:
            router.push("/services/web_development");
            break;
        case 3:
            router.push("/services/staff_agumentation");
            break;
        default:
            router.push("/services/web_development");
            break;
    }
};