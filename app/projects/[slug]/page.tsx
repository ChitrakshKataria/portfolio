type Props = {
    params: Promise<{slug: string;}>};

export default async function dynamicProjectPage({ params }: Props) {
    return (
        <div>
            <h1>CONTESNT GOES HERE</h1>
        </div>
    );
}