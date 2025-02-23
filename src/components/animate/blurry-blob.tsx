import { cn } from "@/lib/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
    firstBlobColor: string;
    secondBlobColor: string;
}

export default function BlurryBlob({
                                       className,
                                       firstBlobColor,
                                       secondBlobColor,
                                   }: BlobProps) {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="relative w-full h-full">
                <div
                    className={cn(
                        "absolute h-[500px] w-[500px] animate-pop-blob rounded-full p-8 mix-blend-multiply blur-3xl filter",
                        "left-[20%] top-[20%]"
                    )}
                    style={{
                        backgroundColor: firstBlobColor,
                        opacity: 0.45
                    }}
                />
                <div
                    className={cn(
                        "absolute h-[500px] w-[500px] animate-pop-blob rounded-full p-8 mix-blend-multiply blur-3xl filter",
                        "right-[20%] bottom-[20%]"
                    )}
                    style={{
                        backgroundColor: secondBlobColor,
                        opacity: 0.45
                    }}
                />
            </div>
        </div>
    );
}