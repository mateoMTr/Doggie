import {cva, VariantProps} from "class-variance-authority";
import {Loader} from "lucide-react";
import {cn} from "@/lib/utils";

const SpinnerVariants = cva (
    "text-muted-foreground animate-spin",
    {
        variants: {
            size: {
                default: "h-4 w-4",
                sm: "h-2 w-2",
                lg: "h-6 w-6",
                icon: "h-10 w-10"
            },
            color:{
                morado: 'bg-purple-900 text-purple-900'
            }

        },
        defaultVariants: {
            size: 'default'
        }
    }
)

interface SpinnerProps extends VariantProps<typeof SpinnerVariants>{}

export const Spinner =({size}: SpinnerProps) => {
    return(
        <Loader className={cn(SpinnerVariants({size}))}></Loader>
    )

}