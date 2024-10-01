import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { BackButton } from "./BackButton";
import Socials from "./socials";

type CardWrapperProps = {
  children: React.ReactNode;
  cardTitle: string;
  backButtonHref: string;
  backButtonLabel: string;
  showSocials?: boolean;
};

export const AuthCard = ( {
  children,
  cardTitle,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: CardWrapperProps) =>{

    return(

    <Card>
        <CardHeader>

            <CardTitle>
                {cardTitle}
            </CardTitle>
            <CardContent>
                {children}
            </CardContent>

            {showSocials &&(
                <CardFooter>
                    <Socials />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton href={backButtonHref} label = {backButtonLabel} />
            </CardFooter>

        </CardHeader>

    </Card>

        )
};


