import java.util.*;
public class SocialMedia {
    // declarations
    private static List<Map<String, String>> v1 = new ArrayList<>(Collections.nCopies(26, new HashMap<>()));
    private static List<Map<String, List<String>>> v2 = new ArrayList<>(Collections.nCopies(26, new HashMap<>()));
    private static String profileId, profileName, location, contact, gender, occupation, postsCount;
    private static Map<String, Integer> followersCount = new HashMap<>();
    private static Map<String, Integer> followingCount = new HashMap<>();
    private static Map<String, Map<String, String>> mp = new HashMap<>();
    private static Map<String, List<String>> ml = new HashMap<>();

    // Printing the details of a profile
    public static void printDetails(Map<String, Map<String, String>> mp, Map<String, List<String>> ml) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter profileName: ");
        String profileName = scanner.nextLine();
        for (Map.Entry<String, String> p : mp.get(profileName).entrySet()) {
            System.out.println(p.getKey() + ": " + p.getValue());
        }
        System.out.println("FriendsList: ");

        for (String friend : ml.get(profileName)) {
            System.out.print(friend + " ");
        }
    }

    // Takes input of two friend names and make second as friend of first
    // increment following count of friend2, increment followers count of friend1
    public static void makeFriends(Map<String, List<String>> ml, Map<String, Integer> followersCount, Map<String, Integer> followingCount) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter friend1: ");
        String friend1 = scanner.nextLine();
        System.out.print("Enter friend2: ");
        String friend2 = scanner.nextLine();
        ml.computeIfAbsent(friend1, k -> new ArrayList<>()).add(friend2);
        followersCount.put(friend1, followersCount.getOrDefault(friend1, 0) + 1);
        followingCount.put(friend2, followingCount.getOrDefault(friend2, 0) + 1);
    }

    // Display either followers or following count depending on the input a or b
    public static void followCount(Map<String, Integer> followersCount, Map<String, Integer> followingCount) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter profileName: ");
        String profileName = scanner.nextLine();
        System.out.print("Enter a or b: ");
        char ch = scanner.nextLine().charAt(0);
        if (ch == 'a') {
            System.out.println(followersCount.getOrDefault(profileName, 0));
        } else {
            System.out.println(followingCount.getOrDefault(profileName, 0));
        }
    }

    // Displaying the mutual friends of two friends
    public static void displayMutuals(Map<String, List<String>> ml) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter friend1: ");
        String friend1 = scanner.nextLine();
        System.out.print("Enter friend2: ");
        String friend2 = scanner.nextLine();
        List<String> friends1 = ml.getOrDefault(friend1, new ArrayList<>());
        List<String> friends2 = ml.getOrDefault(friend2, new ArrayList<>());
        friends1.retainAll(friends2);
        System.out.println(String.join(" ", friends1));
    }

    // Suggest friends based on friend's friends
    public static void suggestFriends(Map<String, List<String>> ml) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter profileName: ");
        String profileName = scanner.nextLine();
        System.out.println("Suggested Friends: ");
        Set<String> suggestedFriends = new HashSet<>();
        for (String friend : ml.getOrDefault(profileName, new ArrayList<>())) {
            suggestedFriends.addAll(ml.getOrDefault(friend, new ArrayList<>()));
        }
        suggestedFriends.removeAll(ml.getOrDefault(profileName, new ArrayList<>()));
        suggestedFriends.remove(profileName);
        System.out.println(String.join(" ", suggestedFriends));
    }

    // Displaying the profile with highest followers list
    public static void mostPopular(Map<String, Integer> followersCount) {
        String profileName = "";
        int c = 0;
        for (Map.Entry<String, Integer> entry : followersCount.entrySet()) {
            if (c < entry.getValue()) {
                c = entry.getValue();
                profileName = entry.getKey();
            }
        }
        System.out.println(profileName);
    }

    // Displaying the profile with top in following
    public static void topInFollowing(Map<String, Integer> followingCount) {
        String profileName = "";
        int c = 0;
        for (Map.Entry<String, Integer> entry : followingCount.entrySet()) {
            if (c < entry.getValue()) {
                c = entry.getValue();
                profileName = entry.getKey();
            }
        }
        System.out.println(profileName);
    }

    // Make friends until user requires
    public static void make() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("1:Make friends 2:Don't make\nEnter your choice: ");
            int ch = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            if (ch == 2) break;
            else {
                makeFriends(ml, followersCount, followingCount);
            }
        }
    }

    public static void createAccount(int i) {
        Scanner scanner = new Scanner(System.in);
        String profileId, profileName, location, contact, gender, occupation, postsCount;

        System.out.print("Enter profileId: ");
        profileId = scanner.nextLine();
        v1.get(i).put("profileId", profileId);

        System.out.print("Enter profileName: ");
        profileName = scanner.nextLine();
        v1.get(i).put("profileName", profileName);

        System.out.print("Enter location: ");
        location = scanner.nextLine();
        v1.get(i).put("location", location);

        System.out.print("Enter contact: ");
        contact = scanner.nextLine();
        v1.get(i).put("contact", contact);

        System.out.print("Enter gender: ");
        gender = scanner.nextLine();
        v1.get(i).put("gender", gender);

        System.out.print("Enter occupation: ");
        occupation = scanner.nextLine();
        v1.get(i).put("occupation", occupation);

        System.out.print("Enter postsCount: ");
        postsCount = scanner.nextLine();
        v1.get(i).put("postsCount", postsCount);

        Map<String, String> profile = new HashMap<>();
        profile.put("profileId", profileId);
        profile.put("profileName", profileName);
        profile.put("location", location);
        profile.put("contact", contact);
        profile.put("gender", gender);
        profile.put("occupation", occupation);
        profile.put("postsCount", postsCount);

        mp.put(profileName, profile);
    }

    public static void displayPosts(Map<String, Map<String, String>> mp) {
        Scanner scanner = new Scanner(System.in);
        String profileName = scanner.nextLine();
        System.out.println(mp.get(profileName).get("postsCount"));
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean flag = true;

        while (flag) {
            System.out.print("Enter choice: ");
            int ch = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (ch) {
                case 1:
                    for (int i = 0; i < 26; i++) {
                        createAccount(i);
                    }
                    break;
                case 2:
                    printDetails(mp, ml);
                    break;
                case 3:
                    make();
                    break;
                case 4:
                    followCount(followersCount, followingCount);
                    break;
                case 5:
                    displayMutuals(ml);
                    break;
                case 6:
                    suggestFriends(ml);
                    break;
                case 7:
                    mostPopular(followersCount);
                    break;
                case 8:
                    displayPosts(mp);
                    break;
                case 9:
                    topInFollowing(followingCount);
                    break;
                case 10:
                    System.out.println("App Closed\nThank You");
                    flag = false;
                    break;
                default:
                    System.out.println("Enter correct choice");
                    break;
            }
        }
        scanner.close();
    }
}