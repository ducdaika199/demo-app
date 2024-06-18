import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { ahSDK } from 'ahsdk';
import { Button, SectionList, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './style';

function Profile() {
  const { colors } = useTheme();
  const chatClient = ahSDK.getChat();
  const VideoSdk = ahSDK.getVideo();
  const [showAllChat, setShowAllChat] = useState<boolean>();
  const [showAllVideo, setShowAllVideo] = useState<boolean>();

  const DATACHAT = [
    {
      title: 'Chat',
      data: Object.keys(chatClient ?? []),
    },
  ];

  const DATAVIDEO = [
    {
      title: 'Video',
      data: Object.keys(VideoSdk ?? []),
    },
  ];

  const login = (authCode: string) => {
    ahSDK
      .login(authCode)
      .then(async () => {
        // All Channels
        const data = [];
        const isInitialized = chatClient?.isInitialized();
        const channelList = (await ahSDK.getChat()?.getAllChannels()) ?? [];
        const unReadCount = await ahSDK?.getChat()?.getTotalUnreadCount();
        // All Coaches
        const coachList = (await ahSDK.getChat()?.getCoachList()) ?? [];
      })
      .catch(() => {
        console.log('error');
      })
      .finally(() => {});
  };

  useEffect(() => {
    const token =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiNEhDSHhpNWROcnQ1VVQ2UlpRbzYzIiwiaWF0IjoxNzE4Njk5MjA3LCJleHAiOjE3MTg3ODU2MDd9.C6SHRNZmjh6v9_nFekEWdVhcQNGXFXxTVM0MPbAqd-Y7qcG3XLXGwa7RA_PQVfU4JuEtu2-1vrph2zMVQfeoOval5M1yv54Mgb81aBRtbhEW7-eIZbtcR1cywpEvMql6vHrlFaEXeulSRSd9AijM8ibOTmGyfxeaU2XpV7A4JLGenpevqzQGFl40tkrbvS0IYVE1UgLePZxG07Nvl7XuR1aVylrTPDBg7dxaPJ9ldHU7pOqX2LTSnR-ZTEAQ16XBC3m1zZtemrLkgujmgYZ2FAhANcZEDSbtmbwcYypG8yZkxt9_reEZ2Tq3nmblrBLekps4UGq0JQ1RBm_kzPtvskJGO57rkOVVPPf73eUpsSniE1es34XXGKbtfk46WMdNLlz8WOo2BeC9BwOlGAmI2qrHH6HU5Plw_bJZQmtzrGXhMDj70qGwjL_fafYiNx9vx-Rnm14uA-6TMPYaEr1UbNsaXWNzPkHZCKQrVLLpLfNxSuZAcI4R_baoHnREgl7kUDOtWw9AzmZuTNaEEVBYzNquyBKcy25x6CHmgY7Zc601ipHb9p5scvPrW0i4_HpOeQyW4iG1iuxn7zApafni3FBYj2OviMlukkPxpsncTZw-h7NFUYG9o8H3B8SCsVzMRtE2noxdChkBVWtDEgJ1W4s1nfCrciiRGKSXP46wyqE';
    login(token);
  }, []);

  return (
    <SafeScreen>
      <View style={styles.flexContainer}>
        {chatClient && (
          <Button
            title="Chat"
            color={colors.gray50}
            onPress={() => {
              setShowAllChat(true);
              setShowAllVideo(false);
            }}
          />
        )}
        {VideoSdk && (
          <Button
            title="Video"
            color={colors.gray50}
            onPress={() => {
              setShowAllVideo(true);
              setShowAllChat(false);
            }}
          />
        )}
        <Button
          title="Reset"
          color={colors.red500}
          onPress={() => {
            setShowAllChat(false);
            setShowAllVideo(false);
          }}
        />
        {showAllChat && (
          <View style={styles.textContainer}>
            <SectionList
              sections={DATACHAT}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => (
                <View style={styles.itemList}>
                  <Text style={styles.textStyle} onPress={() => {}}>
                    {item}
                  </Text>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.titleText}>{title}</Text>
              )}
            />
          </View>
        )}
        {showAllVideo && (
          <View style={styles.textContainer}>
            <SectionList
              sections={DATAVIDEO}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => (
                <View style={styles.itemList}>
                  <Text style={styles.textStyle} onPress={() => {}}>
                    {item}
                  </Text>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.titleText}>{title}</Text>
              )}
            />
          </View>
        )}
      </View>
    </SafeScreen>
  );
}

export default Profile;
