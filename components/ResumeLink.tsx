import React from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const ResumeLink = () => {
    const [isOpen, setIsOpen] = React.useState(false);
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
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="font-amita lowercase text-paragraph group w-max mt-10"
            >
                <p>Resume</p>
                <span className="block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all" />
            </button>

            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="fixed w-full h-full backdrop-blur-sm  inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
                    <div className="bg-background rounded-xl p-6 w-full max-w-min border-[1px] border-neutral-700 relative">
                        <button
                            title='close popup'
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 text-white hover:opacity-70 transition-opacity"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-6 font-poppins">
                            View or Download Resume
                        </h2>

                        <div className="flex  items-center justify-center gap-5 px-5 flex-col md:flex-row font-poppins text-button">
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
                </div>
            )}
        </>
    );
};

export default ResumeLink;