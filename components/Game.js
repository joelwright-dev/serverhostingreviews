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

export default function Game(props) {
    const theme = useMantineTheme();
    return (
        <Card shadow="sm" p="lg" style={{height:'100%'}}>
            <Card.Section>
                <Image src={props.img} alt={props.alt} height={300}/>
            </Card.Section>
            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>{props.title}</Text>
                {
                    props.badge ? (
                        <Badge color="pink" variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}}>
                            {props.badge}
                        </Badge>
                    ) : (
                        <></>
                    )
                }
            </Group>
            <Text size="sm" lineClamp={2} style={{ lineHeight: 1.5 }}>
                {props.description}
            </Text>
            <Link href={props.href}>
                <Button variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}} fullWidth style={{ marginTop: 14 }}>
                    {props.button}
                </Button>
            </Link>
        </Card>
    )
}