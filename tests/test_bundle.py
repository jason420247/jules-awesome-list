import unittest
from refractive_bundles.bundle import RefractiveBundle

class TestRefractiveBundle(unittest.TestCase):
    def test_branching(self):
        fixtures = ["fixture1", "fixture2", "fixture3"]
        bundle = RefractiveBundle(fixtures)
        branches = bundle.branch()

        self.assertEqual(len(branches), len(fixtures))

        for i, branch in enumerate(branches):
            self.assertEqual(branch["fixture"], fixtures[i])
            self.assertEqual(branch["parent_tral_tag"], bundle.tral_tag)
            self.assertIsNotNone(branch["branch_tral_tag"])

    def test_tral_tag_generation(self):
        bundle1 = RefractiveBundle(["fixture1"])
        bundle2 = RefractiveBundle(["fixture2"])

        self.assertIsNotNone(bundle1.tral_tag)
        self.assertIsNotNone(bundle2.tral_tag)
        self.assertNotEqual(bundle1.tral_tag, bundle2.tral_tag)

    def test_custom_tral_tag(self):
        custom_tag = "my-custom-tag"
        bundle = RefractiveBundle(["fixture1"], tral_tag=custom_tag)
        self.assertEqual(bundle.tral_tag, custom_tag)

if __name__ == "__main__":
    unittest.main()
