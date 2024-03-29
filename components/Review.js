import {
    Title,
    Center,
    Space,
    Text,
    Badge,
    Image,
    Group,
    Button,
    Card,
    Grid,
    useMantineTheme,
} from '@mantine/core';
import Link from 'next/link'
import parse from 'html-react-parser'

export default function Game(props) {
    const theme = useMantineTheme();
    return (
        <Card shadow="sm" p="lg" style={{height:'100%'}} key={props.review.id}>
            <Group position="apart" style={{ marginBottom: 5 }}>
                <Text weight={500}>{props.review.title}</Text>
                {
                    props.review.stars ? (
                        <Badge color="pink" variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}}>
                            {props.review.stars}/5
                        </Badge>
                    ) : (
                        <></>
                    )
                }
            </Group>
            <Text size="sm" lineClamp={1} style={{ lineHeight: 1.5 }}>
                {props.review.description}
            </Text>
            {
                props.review.review ? (
                    <Link href={`reviews/${props.review.title.replaceAll(" ", "-").toLowerCase()}`}>
                        <Button variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}} fullWidth style={{ marginTop: 14 }}>
                            {props.review.button}
                        </Button>
                    </Link>
                ) : (
                    <Link href={`articles/${props.review.title.replaceAll(" ", "-").toLowerCase()}`}>
                        <Button variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}} fullWidth style={{ marginTop: 14 }}>
                            {props.review.button}
                        </Button>
                    </Link>
                )
            }
        </Card>
    )
}