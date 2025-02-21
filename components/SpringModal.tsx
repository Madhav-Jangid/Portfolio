import { useAppContext } from "@/app/context/AppProvider";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CircleAlert } from "lucide-react";

const SpringModal = () => {

    const { isOpen, setIsOpen } = useAppContext();


    const docUrl = "https://docs.google.com/document/d/1HlB1qEM3KI_Y5ckd6eIrTfbYNnjMYAVHWRfUx70C8k0/edit?usp=sharing";

    const handleDownload = () => {
        const exportUrl = docUrl.replace(/\/edit.*$/, '/export?format=pdf');
        window.open(exportUrl, '_blank');
        setIsOpen(false);
    };

    const handleView = () => {
        window.open(docUrl, '_blank');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[90] grid place-items-center overflow-y-scroll cursor-pointer min-h-screen"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-[#000] to-[#222] p-6 rounded-3xl border-[1px] border-[#444] w-full max-w-full md:max-w-min shadow-xl cursor-default relative overflow-hidden"
                    >
                        <CircleAlert className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                                <CircleAlert />
                            </div>
                            <h3 className="text-4xl font-bold text-center mb-2">
                                Access the Document
                            </h3>
                            <p className="text-center text-secondary text-button px-10 font-poppins mb-6  mx-auto">
                                You can either view this document online or download it as a PDF for offline access.
                            </p>
                            <div className="flex items-center justify-center gap-5 px-5 flex-col md:flex-row font-poppins text-button">
                                <button
                                    onClick={handleView}
                                    className="w-full md:w-[17rem] lg:w-72 border-[1px] border-white rounded-full h-14 px-6 flex items-center justify-between bg-foreground text-background group"
                                >
                                    View Online
                                    <ArrowUpRight className="text-button group-hover:rotate-45 transition-all" />
                                </button>

                                <button
                                    onClick={handleDownload}
                                    className="w-full md:w-[17rem] lg:w-72 border-[1px] border-white border-opacity-50 rounded-full h-14 px-6 flex items-center justify-between group"
                                >
                                    Download PDF
                                    <ArrowUpRight className="text-button group-hover:rotate-45 transition-all" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpringModal;
