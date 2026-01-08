import { Box, Card, CardActions, CardContent, CardHeader, Divider, SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface cardItemsMuiProps {
    variant: 'elevation' | 'outlined';
    childBody: ReactNode;
    childHeader?: ReactNode;
    childAction?: ReactNode;
    description?: string;
    value?: string;
    sxBox?: SxProps<Theme>;
    sxCard?: SxProps<Theme>;
    sxCardHeader?: SxProps<Theme>;
    sxCardContent?: SxProps<Theme>;
    sxCardActions?: SxProps<Theme>;
}

export default function CardItemMui({
    variant = 'outlined',
    childHeader,
    childBody,
    childAction,
    sxBox,
    sxCard,
    sxCardHeader,
    sxCardContent,
    sxCardActions,
}: cardItemsMuiProps) {
    return (
        <Box sx={sxBox}>
            <Card variant={variant} sx={sxCard}>
                {
                    childHeader && (
                        <CardHeader>
                            <Box sx={{
                                position: 'relative',
                                display: 'flex',
                                ...sxCardHeader
                            }}>
                                <Typography variant="body1" fontSize={18}>
                                    {childHeader}
                                </Typography>
                            </Box>
                            <Divider sx={{ width: '100%'}} />
                        </CardHeader>
                    )
                }
                <CardContent>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        ...sxCardContent,
                    }}>
                        <Typography variant="body1">
                            {childBody}
                        </Typography>
                    </Box>
                </CardContent>
                {childAction && <CardActions>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        ...sxCardActions,
                    }}>
                        <Typography variant="body2" component={'span'}>
                            {childAction}
                        </Typography>
                    </Box>
                </CardActions>}
            </Card>
        </Box>
    )
}